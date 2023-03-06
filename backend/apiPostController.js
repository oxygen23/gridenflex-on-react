import database from './database.js'
import tools from "./tools.js"
import axios from 'axios'
import random from 'random'

class ApiPostController {
    async getReviews(request, response) {
        database.query('SELECT * FROM `reviews`', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере', 'bcode': 1})
            }
    
            response.json(rows)
        })
    }

    async sendReview(request, response) {
        if (
            !tools.checkJsonKey(request.body, 'author') ||
            !tools.checkJsonKey(request.body, 'image_url') ||
            !tools.checkJsonKey(request.body, 'description') ||
            !tools.checkJsonKey(request.body, 'company') ||
            !tools.checkJsonKey(request.body, 'rating') ||
            !tools.checkJsonKey(request.body, 'key')) {

            return response.status(400).json({'error': 'Некорректные данные.', 'bcode': 2})
        }

        let author = tools.delInjection(request.body.author)
        let image_url = tools.delInjection(request.body.image_url)
        let description = tools.delInjection(request.body.description)
        let company = tools.delInjection(request.body.company)
        let rating = tools.delInjection(request.body.rating)
        let key = tools.delInjection(request.body.key)

        if (author.length == 0 ||
            image_url.length == 0 ||
            description.length == 0 ||
            company.length == 0 || 
            rating.length == 0 || 
            key.length == 0) {
                return response.status(400).json({'error': 'Некорректные данные.', 'bcode': 6})
            }

        database.query('SELECT * FROM `keys_for_reviews`', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере', 'bcode': 3})
            }

            let searched_key = false
            
            rows.forEach(i => {
                if (i['key_string'] == key) {
                    searched_key = true
                }
            })

            if (!searched_key) {
                return response.status(400).json({'error': 'Ключ недействителен.'})
            }

            database.query("INSERT INTO `reviews` (`author`, `image_url`, `description`, `company`, `rating`, `date`) VALUES (" +
                "'" + author + "', " + 
                "'" + image_url + "', " + 
                "'" + description + "', " + 
                "'" + company + "', " + 
                "'" + rating + "', " + 
                "'" + Date.now() + "'" +
            ");", (error, rows, fields) => {

                if (error) {
                    return response.status(500).json({'error': 'Ошибка на сервере', 'bcode': 4})
                }

                database.query('DELETE FROM `keys_for_reviews` WHERE `keys_for_reviews`.`key_string` = "' + key + '";', (error, rows, fields) => {
                    if (error) {
                        return response.status(500).json({'error': 'Ошибка на сервере', 'bcode': 8})
                    }
                })

                let new_key = random.int(100000, 999999).toString()

                database.query('INSERT INTO `keys_for_reviews` (`key_string`) VALUES ("' + new_key + '");', (error, rows, fields) => {
                    if (error) {
                        return response.status(500).json({'error': 'Ошибка на сервере', 'bcode': 8})
                    }
                })

                let message = 'Новый ключ для отзыва: ' + new_key.toString()

                axios.get(`https://api.telegram.org/bot5780555864:AAE9gBo2B9aK0PoOxrKYp0xQ9Ge6A4Pf1nI/sendMessage?chat_id=695606474&text=${message}`)

                response.json({'message': 'Успех.', 'items': {'id': rows.insertId}})

            })
        })

    }

    async sendContacts(request, response) {
        if (
            !tools.checkJsonKey(request.body, 'name') ||
            !tools.checkJsonKey(request.body, 'email') ||
            !tools.checkJsonKey(request.body, 'contacts')) {

            return response.status(400).json({'error': 'Некорректные данные.', 'bcode': 5})
        }

        let description = "Не указано";

        if (tools.checkJsonKey(request.body, 'description')) {
            description = tools.delInjection(request.body.description);
        }

        let name = tools.delInjection(request.body.name)
        let email = tools.delInjection(request.body.email)
        let contacts = tools.delInjection(request.body.contacts)

        if (name.length == 0 ||
            email.length == 0 ||
            contacts.length == 0) {
                return response.status(400).json({'error': 'Некорректные данные.', 'bcode': 7})
            }

        let message = `Новый заказ%0A%0AИмя отправителя: ${name}%0AПочта отправителя: ${email}%0AКонтакты отправителя: ${contacts}%0A%0AКак узнали о нас: ${description}`

        axios.get(`https://api.telegram.org/bot5780555864:AAE9gBo2B9aK0PoOxrKYp0xQ9Ge6A4Pf1nI/sendMessage?chat_id=695606474&text=${message}`).then(function (res) {
            response.status(200).json({'message': 'Успех.'})
        })
    }
}

export default new ApiPostController
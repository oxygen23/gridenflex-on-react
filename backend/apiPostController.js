import database from './database.js'
import tools from "./tools.js"

class ApiPostController {
    async getReviews(request, response) {
        database.query('SELECT * FROM `reviews`', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере', 'code': 1})
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

            return response.status(400).json({'error': 'Некорректные данные.', 'code': 2})
        }

        let author = tools.delInjection(request.body.author)
        let image_url = tools.delInjection(request.body.image_url)
        let description = tools.delInjection(request.body.description)
        let company = tools.delInjection(request.body.company)
        let rating = tools.delInjection(request.body.rating)
        let key = tools.delInjection(request.body.key)

        database.query('SELECT * FROM `keys_for_reviews`', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере', 'code': 3})
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
        })

        database.query("INSERT INTO `reviews` (`author`, `image_url`, `description`, `company`, `rating`, `date`) VALUES (" +
            "'" + author + "', " + 
            "'" + image_url + "', " + 
            "'" + description + "', " + 
            "'" + company + "', " + 
            "'" + rating + "', " + 
            "'" + Date.now() + "'" +
        ");", (error, rows, fields) => {

            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере', 'code': error})
            }

            response.json({'message': 'Успех.', 'items': {'id': rows.insertId}})

        })
    }
}

export default new ApiPostController
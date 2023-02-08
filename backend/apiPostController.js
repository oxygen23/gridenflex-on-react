import database from './database.js'
import tools from "./tools.js";

class ApiPostController {
    async getReviews(request, response) {
        database.query('SELECT * FROM `reviews`;', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере'});
            }
    
            response.json(rows)
        });
    }

    async sendReview(request, response) {
        console.log(request.body)
        if (
            !tools.checkJsonKey(request.body, 'author') ||
            !tools.checkJsonKey(request.body, 'image_url') ||
            !tools.checkJsonKey(request.body, 'description') ||
            !tools.checkJsonKey(request.body, 'company') ||
            !tools.checkJsonKey(request.body, 'rating') ||
            !tools.checkJsonKey(request.body, 'key')) {

            return response.status(400).json({'error': 'Некорректные данные.'});
        }

        var author = tools.delInjection(request.body.author);
        var image_url = tools.delInjection(request.body.image_url);
        var description = tools.delInjection(request.body.description);
        var company = tools.delInjection(request.body.company);
        var rating = tools.delInjection(request.body.rating);
        var key = tools.delInjection(request.body.key);

        database.query('SELECT * FROM `keys_for_reviews`;', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере'});
            }
    
            response.json(rows)
        });
    }
}

export default new ApiPostController;
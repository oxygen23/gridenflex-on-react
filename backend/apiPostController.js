import database from './database.js'

class ApiPostController {
    async review(request, response) {
        response.json({'lol': 'kek'})
        database.query('SELECT * FROM `themes`;', (error, rows, fields) => {
            if (error) {
                return response.status(500).json({'error': 'Ошибка на сервере'});
            }
    
            response.render('index', {'rows': rows});
    
        });
    }
}

export default new ApiPostController;
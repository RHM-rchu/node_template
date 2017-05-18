var self = module.exports = {

  getAPage: function (qHandleType) {
    return new Promise(function (resolve, reject) {
      resolve(qHandleType)
			// mysql_queries.getAllHomespages(quiz_id.toString(), qHandleType).then(function(homepage_quizzes) {
			// 	Logger.debug(filename, ":getAQuiz():GET Subcat ID:" + homepage_quizzes[0].cID);
			// 	mysql_queries.getAllHomespages(homepage_quizzes[0].cID.toString(), "just_parent").then(function(questions) {
			// 		if (self.check_is_empty(questions)) {
			// 			reject(`${global.MSG.err_204} ${homepage_quizzes[ 0 ].cID.toString()}`);
			// 		} else {
			// 			Logger.debug(filename, ":getAQuiz():Count: " + questions.length);
			// 			if (questions.length > 0) {
			// 				homepage_quizzes[0].questions = questions;
			// 			}
			// 			resolve(homepage_quizzes);
			// 		}
			// 	});
			// }).catch((err) => setImmediate(() => {
			// 	Logger.error(err)
			// })); // Throw async to escape the promise chain
    })
  },
  getAPage2: function (qHandleType) {
    return new Promise(function (resolve, reject) {
      resolve(qHandleType)
    })
  }

}

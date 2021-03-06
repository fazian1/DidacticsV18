//getting API for showing all the data
import axios from 'axios';
//export const getQuestionsStudents = () => fetch("https://didactics.one/questions").then(res => res.json())
export const getQuestionsStudents = id => (
	console.log(id),
	axios.post(`https://didactics.one/questions`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createQuestionsStudents = (todo) => fetch("https://didactics.one/questions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateQuestionsStudents = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getQuestionStudent = (id) => fetch(`https://didactics.one/questions${id}`).then(res => res.json())
export const getQuestionStudent = id => (
	console.log(id),
	axios.post(`https://didactics.one/questions${id}`)
		.then(res => res.data, )
)
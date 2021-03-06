//getting API for showing all the data
import axios from 'axios';
//export const getEmails = () => fetch("https://didactics.one/personalInfos").then(res => res.json())
export const getEmails = id => (
	console.log(id),
	axios.post(`https://didactics.one/personalInfos`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeacher = (todo) => fetch("https://didactics.one/personalInfos/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getEmail = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getEmail = id => (
	console.log(id),
	axios.post(`https://didactics.one/${id}`)
		.then(res => res.data, )
)
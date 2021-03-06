//getting API for showing all the data
import axios from 'axios';
export const getNotifications = () => fetch("https://didactics.one/notifications").then(res => res.json())

//getting API for inserting the data
export const createNotifications = (todo) => fetch("https://didactics.one/notifications/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateNotification = (todo, id) => fetch(`https://didactics.one/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteNotification = (todo, id) => fetch(`https://didactics.one/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data

export const getNotificationSpecific = id => (
	console.log(id),
	axios.post(`https://didactics.one/notifications/specific/${id}`)
		.then(res => res.data, )
)


export const getNotificationSpecificWithGrade = (id, subject) => (
	console.log(id),
	axios.post(`https://didactics.one/notifications/specific/grade/${id}`)
		.then(res => res.data, )
)
export const getNotificationById = id => (
	console.log(id),
	axios.post(`https://didactics.one/notifications/specific/id/${id}`)
		.then(res => res.data, )
)
import './App.css'
import UserCard from './components/UserCard/index.jsx'

function App() {
	const userCardInfo = {
		bgImage:
			'https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		nameOficial: 'Emma Watson',
		nickName: 'EmWatson',
		tweets: 1.337,
		following: 561,
		followers: 718,
		isGender: true, //girl - true, man -false
	}
	return <UserCard user={userCardInfo}></UserCard>
}

export default App

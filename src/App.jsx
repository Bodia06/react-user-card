import './App.css'
import UserCard from './assets/components/userCard/index.jsx'

function App() {
	const userCardInfo = {
		'bg-image':
			'https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		nameOficial: 'Emma Watson',
		nickName: 'EmWatson',
		tweets: 1.337,
		following: 561,
		followers: 718,
		gender: true, //girl - true, man -false
	}
	return (
		<>
			<UserCard
				bgImage={userCardInfo['bg-image']}
				nameOficial={userCardInfo.nameOficial}
				nickName={userCardInfo.nickName}
				tweets={userCardInfo.tweets}
				following={userCardInfo.following}
				followers={userCardInfo.followers}
				gender={userCardInfo.gender}
			></UserCard>
		</>
	)
}

export default App

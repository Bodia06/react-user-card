import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import './userCard.css'

function UserCard(props) {
	const {
		bgImage,
		nameOficial,
		nickName,
		tweets,
		following,
		followers,
		isGender,
	} = props.user

	const bgColorBtn = {
		backgroundColor: isGender ? '#a94064' : '#4169E1',
	}

	function btnSubsribeAction() {
		const followersCount = document.querySelector(
			'.user-card__info-status--followers__count'
		)
		const currentFollowers = parseInt(followersCount.textContent)

		const subscribeButton = document.querySelector('.user-card__btn-subscribe')
		subscribeButton.classList.toggle('user-card__btn-subscribe--active')
		if (
			subscribeButton.classList.contains('user-card__btn-subscribe--active')
		) {
			subscribeButton.textContent = '✔'
			followersCount.textContent = currentFollowers + 1
		} else {
			subscribeButton.textContent = '+'
			followersCount.textContent = currentFollowers - 1
		}
	}

	function starAction() {
		const starIcon = document.querySelector('.user-card__info-star--icon')
		starIcon.classList.toggle('user-card__info-star--icon--active')
	}

	return (
		<article className='user-card__container'>
			<div className='user-card__info'>
				<div className='user-card__info-img'>
					<img
						className='user-card__info-img--bg'
						src={bgImage}
						alt={`${nameOficial} photo`}
					/>
				</div>
				<div className='user-card__info-star'>
					<FontAwesomeIcon
						className='user-card__info-star--icon'
						icon={faStar}
						onClick={() => starAction()}
					/>
				</div>
				<div className='user-card__info-name'>
					<h2 className='user-card__info-name--oficial'>{nameOficial}</h2>
					<h3 className='user-card__info-name--nick'>{`@${nickName}`}</h3>
				</div>
				<div className='user-card__btn'>
					<button
						className='user-card__btn-subscribe'
						style={bgColorBtn}
						onClick={() => btnSubsribeAction()}
					>
						+
					</button>
				</div>
				<div className='user-card__info-status'>
					<article className='user-card__status-group user-card__info-status--tweets'>
						<h3 className='user-card__status-group--title user-card__info-status--tweets__title'>
							Tweets
						</h3>
						<p className='user-card__status-group--count user-card__info-status--tweets__count'>
							{tweets}
						</p>
					</article>

					<article className='user-card__status-group user-card__info-status--following'>
						<h3 className='user-card__status-group--title user-card__info-status--following__title'>
							Following
						</h3>
						<p className='user-card__status-group--count user-card__info-status--following__count'>
							{following}
						</p>
					</article>

					<article className='user-card__status-group user-card__info-status--followers'>
						<h3 className='user-card__status-group--title user-card__info-status--followers__title'>
							Followers
						</h3>
						<p className='user-card__status-group--count user-card__info-status--followers__count'>
							{followers}
						</p>
					</article>
				</div>
			</div>
		</article>
	)
}

export default UserCard

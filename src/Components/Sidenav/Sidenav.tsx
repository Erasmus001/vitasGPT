import { dummyFavThreads } from '@/Data';
import NewChatButton from '../Buttons/NewChatButton/NewChatButton';
import styles from './Sidenav.module.css';
import Searchbox from '@/UI/Searchbox/Searchbox';
import ChatCard from '../ChatCard/ChatCard';
import { favThreadsProps } from '@/Types';

const Sidenav = () => {
	const numberOfCards = 30;
	return (
		<aside className={styles.sidenav}>
			{/* Search */}
			<div className={styles.search}>
				<Searchbox />
				<NewChatButton />
			</div>

			{/* Favorites */}
			<section className={styles.favorites}>
				<div className={styles.favHd}>
					<h4>Favorites</h4>
				</div>
				<div className={styles.favoritesLists}>
					{dummyFavThreads?.map(
						({ threadTitle, threadDesc, id, timeStamp }: favThreadsProps) => (
							<ChatCard
								threadTitle={threadTitle}
								timeStamp={timeStamp}
								threadDesc={threadDesc}
								id={id}
								key={id}
							/>
						)
					)}
				</div>
			</section>

			{/* Favorites */}
			<section className={styles.threads}>
				<div className={styles.threadsFavHd}>
					<h4>All Threads</h4>
				</div>
				<div className={styles.threadsLists}>
					{[...Array(numberOfCards)].map((_, index) => (
						<ChatCard
							threadTitle={'Thread Title'}
							timeStamp={'25 Mar'}
							threadDesc={'Thread Description'}
							key={index}
							id={String(index)}
						/>
					))}
				</div>
			</section>

      <section className={styles.delConvo}>
        <button>Clear all conversations</button>
      </section>
		</aside>
	);
};

export default Sidenav;

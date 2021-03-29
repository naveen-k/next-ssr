import React, { useEffect } from 'react';
import { getPostsList } from '../../lib/posts';
import PostsList from '../../components/postsList';
import { DataEvent } from '../../gtm/events.js';

const Posts = ({ postsList }) => {
	useEffect(() => {
		DataEvent('PageDataLayer', `Total Post - ${postsList.data.length}`);
	});
	return postsList.data.map((post) => {
		return <PostsList {...{ post }} />;
	});
};

export const getServerSideProps = async (context) => {
	const postsList = await getPostsList();
	return {
		props: {
			postsList
		}
	};
};

export default Posts;

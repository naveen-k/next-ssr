const GTMPageViewEvent = (url) => {
    const pageEvent = {
        event: 'pageview',
        page: url,
    };
    window && window.dataLayer && window.dataLayer.push(pageEvent);
    return pageEvent;
};

const DataEvent = (dataLayerName,mesgase) => {
	const tagManagerArgs = {
		dataLayer: {
			userId: '001',
			userProject: 'test',
			message: mesgase
		},
		dataLayerName: dataLayerName
	};
    window && window.dataLayer && window.dataLayer.push(tagManagerArgs);
    return tagManagerArgs;
};

export {GTMPageViewEvent,DataEvent};

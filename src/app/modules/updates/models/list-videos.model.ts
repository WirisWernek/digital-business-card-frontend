import { VideoModel } from "./video.model";

export interface ListVideosModel {
	kind: string;
	etag: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: VideoModel[];
}

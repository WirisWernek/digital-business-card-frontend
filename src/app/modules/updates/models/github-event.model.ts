export interface GithubEventModel {
	id: string;
	type: string;
	actor: {
		id: number;
		login: string;
		display_login: string;
		gravatar_id: string;
		url: string;
		avatar_url: string;
	};
	repo: {
		id: number;
		name: string;
		url: string;
	};
	payload: {
		action: string;
		repository_id: number;
		push_id: number;
		size: number;
		distinct_size: number;
		ref: string;
		head: string;
		before: string;
		commits: [
			{
				sha: string;
				author: {
					email: string;
					name: string;
				};
				message: string;
				distinct: boolean;
				url: string;
			}
		];
	};

	public: true;
	created_at: Date;
}

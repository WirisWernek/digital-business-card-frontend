import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { GithubEventModel } from "../models/github-event.model";

@Injectable()
export class GithubStore{
	url: string;
	username: string;
	constructor(private http: HttpClient) {
		this.url = environment.API_URL + '/github';
		this.username = environment.GITHUB_USERNAME;
	}

	getUltimosEventos() {
		return this.http.post<GithubEventModel[]>(`${this.url}/events`, { username: this.username});
	}
}
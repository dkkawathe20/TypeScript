import * as request from 'request'
import { User } from './user';
import { Repo } from './repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}
export class GithubApiService {

    getUserInfo(userName: string, cb: (user: User) => any) {

        //sometime required options parameter in place of null
        request.get("https://api.github.com/users/" + userName, OPTIONS, (error: any, response: any, body: any) => {
            // console.log(error);
            //console.log(response);
            //console.log(body);
            //let user = new User(JSON.parse(body));
            let user = new User(body);//if json:true
            //console.log(user);
            cb(user);
        });
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (error: any, response: any, body: any) => {
            let repos = body.map((repo: any) => new Repo(repo));
            cb(repos)
        });
    }
}
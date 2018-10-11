import { GithubApiService } from './GithubApiService';
import { User } from './user';
import { Repo } from './repo';
import _ from 'lodash';

let svc: GithubApiService = new GithubApiService();

if (process.argv.length < 3) {
    console.log("Please pass username as an argument")
}
else {
    let userName = process.argv[2];

    svc.getUserInfo(userName, (user: User) => {
        svc.getRepos(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let filteredRepos = _.take(sortedRepos, 4);
            user.repos = filteredRepos;
            console.log(user);
        });
    });

}
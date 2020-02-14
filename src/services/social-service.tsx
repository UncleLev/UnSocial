export default class SocialService {
    data = {
        users: [
            {
                id: 1581451652833,
                name: "Alex",
                surname: "Junior",
                folowers: [],
                folowings: [],
                posts: [
                    {
                        id: 1581451152837,
                        likes: 0,
                        comments: [
                            {
                                id: 1581451737113
                            }
                        ]
                    },
                    {
                        id: 1581451652837,
                        likes: 0,
                        comments: [
                            {
                                id: 1581451737113
                            }
                        ]
                    },
                    {
                        id: 1581251652837,
                        likes: 0,
                        comments: [
                            {
                                id: 1581451737113
                            }
                        ]
                    },
                    {
                        id: 1581451652117,
                        likes: 0,
                        comments: [
                            {
                                id: 1581451737113
                            }
                        ]
                    }
                ]
            },
            {
                id: 1581455414286,
                name: "Rex",
                surname: "Janelens",
                folowers: [
                    {
                        id: 1581451652833
                    }
                ],
                folowings: [
                    {
                        id: 1581451652833
                    },
                    {
                        id: 1581451652833
                    }
                ],
                posts: [
                    {
                        id: 1581455436214,
                        likes: 0,
                        comments: [
                            {
                                id: 1581455444192
                            }
                        ]
                    }
                ]
            }
        ]
    };

    getUser(UserId: number) {
        const User = this.data.users.find(({ id }) => id === UserId);
        console.log(User);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (User !== undefined) {
                    resolve(User);
                } else {
                    reject(new Error("404 dont user dont found"));
                }
            }, 1000);
        });
    }

    getUserPost(UserId: number) {
        const User = this.data.users.find(({ id }) => id === UserId);
        console.log(User);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (User !== undefined) {
                    resolve(User);
                } else {
                    reject(new Error("404 dont user dont found"));
                }
            }, 1000);
        });
    }

    getFolowingPosts(UserId: number) {
        const User = this.data.users.find(({ id }) => id === UserId);
        console.log(User?.folowings);
        const Folowing = User?.folowings.map(({id}) => id);
        console.log(Folowing);
        const Posts = this.data.users;


        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (User !== undefined) {
                    resolve(User);
                } else {
                    reject(new Error("404 dont user dont found"));
                }
            }, 1000);
        });
    }
}


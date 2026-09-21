/**
 * 设计推特
 * 难度：★★★☆☆
 * Twitter：postTweet 发推，follow / unfollow 关注关系，getNewsFeed 返回自己和关注者最近最多 10 条推文（新的在前）。
 *
 * 示例：用户 1 发推 5，动态 [5]；关注 2 后 2 发推 6，动态 [6,5]；取关后动态 [5]
 *
 * 思路：用户到关注集合、用户到推文列表（带全局递增时间）。拉取时合并后按时间倒序取 10 条。
 * 时间发推与关注 O(1)，动态 O(推文数 log 推文数)，空间 O(用户 + 推文)
 */

interface Tweet {
  id: number;
  time: number;
}

export class Twitter {
  private time = 0;
  private readonly following = new Map<number, Set<number>>();
  private readonly tweets = new Map<number, Tweet[]>();

  private followSet(userId: number): Set<number> {
    let set = this.following.get(userId);
    if (!set) {
      set = new Set<number>();
      this.following.set(userId, set);
    }
    return set;
  }

  postTweet(userId: number, tweetId: number): void {
    const list = this.tweets.get(userId) ?? [];
    this.time += 1;
    list.push({ id: tweetId, time: this.time });
    this.tweets.set(userId, list);
  }

  getNewsFeed(userId: number): number[] {
    const users = new Set(this.followSet(userId));
    users.add(userId);
    const merged: Tweet[] = [];
    for (const user of users) {
      const list = this.tweets.get(user);
      if (list) {
        merged.push(...list);
      }
    }
    merged.sort((a, b) => b.time - a.time);
    return merged.slice(0, 10).map((tweet) => tweet.id);
  }

  follow(followerId: number, followeeId: number): void {
    if (followerId === followeeId) {
      return;
    }
    this.followSet(followerId).add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    this.followSet(followerId).delete(followeeId);
  }
}

const twitter = new Twitter();
twitter.postTweet(1, 5);
const feedSelf = twitter.getNewsFeed(1);
twitter.follow(1, 2);
twitter.postTweet(2, 6);
const feedFollow = twitter.getNewsFeed(1);
twitter.unfollow(1, 2);
const feedUnfollow = twitter.getNewsFeed(1);
console.log([feedSelf, feedFollow, feedUnfollow]);

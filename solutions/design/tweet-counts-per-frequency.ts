/**
 * 推文频率统计
 * 难度：★★★☆☆
 * TweetCounts：recordTweet 记录某条推文的时间，getTweetCountsPerFrequency 按 minute / hour / day 把 [startTime, endTime] 切成桶并计数。
 *
 * 示例：tweet3 在 0、60、10 发布。minute 区间 [0,59] 为 [2]，[0,60] 为 [2,1]；再记录 120 后 hour 区间 [0,210] 为 [4]
 *
 * 思路：每条推文名对应一个时间列表，查询时按桶宽落桶。
 * 时间记录 O(1)、查询 O(该推文次数)，空间 O(记录数)
 */

export class TweetCounts {
  private readonly times = new Map<string, number[]>();

  recordTweet(tweetName: string, time: number): void {
    const list = this.times.get(tweetName) ?? [];
    list.push(time);
    this.times.set(tweetName, list);
  }

  getTweetCountsPerFrequency(
    freq: string,
    tweetName: string,
    startTime: number,
    endTime: number,
  ): number[] {
    const width = freq === "minute" ? 60 : freq === "hour" ? 3600 : 86400;
    const buckets = Math.floor((endTime - startTime) / width) + 1;
    const result = Array.from({ length: buckets }, () => 0);
    const list = this.times.get(tweetName) ?? [];
    for (const time of list) {
      if (time < startTime || time > endTime) {
        continue;
      }
      const index = Math.floor((time - startTime) / width);
      result[index] += 1;
    }
    return result;
  }
}

const tweets = new TweetCounts();
tweets.recordTweet("tweet3", 0);
tweets.recordTweet("tweet3", 60);
tweets.recordTweet("tweet3", 10);
const minuteShort = tweets.getTweetCountsPerFrequency("minute", "tweet3", 0, 59);
const minuteLong = tweets.getTweetCountsPerFrequency("minute", "tweet3", 0, 60);
tweets.recordTweet("tweet3", 120);
const hourBucket = tweets.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);
console.log([minuteShort, minuteLong, hourBucket]);

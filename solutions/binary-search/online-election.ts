/**
 * 在线选举
 * 难度：★★★☆☆
 * persons[i] 在 times[i] 时刻获得一票。查询时刻 t 时的领先者（票数最多，平票取最近获票的人）。
 *
 * 示例：persons = [0,1,1,0,0,1,0], times = [0,5,10,15,20,25,30]
 * q(3)=0, q(12)=1, q(25)=1, q(15)=0, q(24)=0, q(8)=1
 *
 * 思路：预处理每个时刻的领先者，查询时二分最后一个不超过 t 的时刻。
 * 时间 预处理 O(n)，查询 O(log n)，空间 O(n)
 */

export class TopVotedCandidate {
  private readonly times: number[];
  private readonly leaders: number[];

  constructor(persons: number[], times: number[]) {
    this.times = times;
    this.leaders = [];
    const votes = new Map<number, number>();
    let leader = -1;
    for (const person of persons) {
      const count = (votes.get(person) ?? 0) + 1;
      votes.set(person, count);
      if (leader === -1 || count >= (votes.get(leader) ?? 0)) {
        leader = person;
      }
      this.leaders.push(leader);
    }
  }

  q(t: number): number {
    let left = 0;
    let right = this.times.length - 1;
    while (left < right) {
      const mid = Math.ceil((left + right + 1) / 2);
      if (this.times[mid] <= t) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return this.leaders[left];
  }
}

const election = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
console.log([election.q(3), election.q(12), election.q(25), election.q(15), election.q(24), election.q(8)]);

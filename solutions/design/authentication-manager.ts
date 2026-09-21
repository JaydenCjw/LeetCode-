/**
 * 身份认证系统
 * 难度：★★☆☆☆
 * AuthenticationManager：令牌在 timeToLive 内有效。generate 创建，renew 仅在未过期时续期，countUnexpiredTokens 统计当前仍有效的令牌。过期时刻等于 currentTime 视为已过期。
 *
 * 示例：timeToLive=5。renew 不存在的 aaa 无效，generate(aaa,2) 后 count(6)=1，generate(bbb,7)，renew(aaa,8) 已过期无效，renew(bbb,10) 续到 15，count(15)=0
 *
 * 思路：哈希表保存令牌到期时间。统计时清掉已过期项。
 * 时间均摊 O(1)，空间 O(令牌数)
 */

export class AuthenticationManager {
  private readonly timeToLive: number;
  private readonly expiry = new Map<string, number>();

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive;
  }

  generate(tokenId: string, currentTime: number): void {
    this.expiry.set(tokenId, currentTime + this.timeToLive);
  }

  renew(tokenId: string, currentTime: number): void {
    const expireAt = this.expiry.get(tokenId);
    if (expireAt === undefined || expireAt <= currentTime) {
      return;
    }
    this.expiry.set(tokenId, currentTime + this.timeToLive);
  }

  countUnexpiredTokens(currentTime: number): number {
    let count = 0;
    for (const [tokenId, expireAt] of this.expiry) {
      if (expireAt <= currentTime) {
        this.expiry.delete(tokenId);
      } else {
        count += 1;
      }
    }
    return count;
  }
}

const auth = new AuthenticationManager(5);
auth.renew("aaa", 1);
auth.generate("aaa", 2);
const countAt6 = auth.countUnexpiredTokens(6);
auth.generate("bbb", 7);
auth.renew("aaa", 8);
auth.renew("bbb", 10);
console.log([countAt6, auth.countUnexpiredTokens(15)]);

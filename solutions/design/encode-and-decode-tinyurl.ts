/**
 * 微小 URL 的加密与解密
 * 难度：★★☆☆☆
 * Codec：encode 把长链接变成短链接，decode 还原原链接。同一链接多次编码可得到不同短链，但都能解回原文。
 *
 * 示例：encode 再 decode "https://leetcode.com/problems/design-tinyurl" 得到原串
 *
 * 思路：自增编号转 62 进制作为短码，哈希表保存短码到原链接。
 * 时间 O(短码长度)，空间 O(已编码链接数)
 */

export class Codec {
  private readonly origin = new Map<string, string>();
  private seq = 0;
  private readonly alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  private toBase62(num: number): string {
    if (num === 0) {
      return "0";
    }
    let value = num;
    let code = "";
    while (value > 0) {
      code = this.alphabet[value % 62] + code;
      value = Math.floor(value / 62);
    }
    return code;
  }

  encode(longUrl: string): string {
    this.seq += 1;
    const key = this.toBase62(this.seq);
    this.origin.set(key, longUrl);
    return `http://tinyurl.com/${key}`;
  }

  decode(shortUrl: string): string {
    const key = shortUrl.slice(shortUrl.lastIndexOf("/") + 1);
    return this.origin.get(key) ?? "";
  }
}

const codec = new Codec();
const longUrl = "https://leetcode.com/problems/design-tinyurl";
console.log(codec.decode(codec.encode(longUrl)));

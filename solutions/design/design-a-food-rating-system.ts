/**
 * 设计食物评分系统
 * 难度：★★★☆☆
 * FoodRatings：按菜系查询评分最高的食物；评分相同取字典序更小的名字。changeRating 修改某道菜的分数。
 *
 * 示例：kimchi(korean,9)、miso(japanese,12)、sushi(japanese,8)、moussaka(greek,15)、ramen(japanese,14)、bulgogi(korean,7)。korean 最高是 kimchi；sushi 改为 16 后 japanese 最高是 sushi；ramen 也改为 16 后最高是 ramen
 *
 * 思路：食物映射到菜系和分数，菜系映射到食物列表。查询时扫描该菜系。
 * 时间修改 O(1)、查询 O(该菜系食物数)，空间 O(食物数)
 */

interface FoodInfo {
  cuisine: string;
  rating: number;
}

export class FoodRatings {
  private readonly info = new Map<string, FoodInfo>();
  private readonly byCuisine = new Map<string, string[]>();

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    for (let i = 0; i < foods.length; i += 1) {
      const food = foods[i];
      const cuisine = cuisines[i];
      this.info.set(food, { cuisine, rating: ratings[i] });
      const list = this.byCuisine.get(cuisine) ?? [];
      list.push(food);
      this.byCuisine.set(cuisine, list);
    }
  }

  changeRating(food: string, newRating: number): void {
    const item = this.info.get(food);
    if (item) {
      item.rating = newRating;
    }
  }

  highestRated(cuisine: string): string {
    const foods = this.byCuisine.get(cuisine) ?? [];
    let best = foods[0] ?? "";
    for (const food of foods) {
      const current = this.info.get(food);
      const champion = this.info.get(best);
      if (!current || !champion) {
        continue;
      }
      if (current.rating > champion.rating || (current.rating === champion.rating && food < best)) {
        best = food;
      }
    }
    return best;
  }
}

const ratings = new FoodRatings(
  ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
  ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
  [9, 12, 8, 15, 14, 7],
);
const korean = ratings.highestRated("korean");
ratings.changeRating("sushi", 16);
const afterSushi = ratings.highestRated("japanese");
ratings.changeRating("ramen", 16);
console.log([korean, afterSushi, ratings.highestRated("japanese")]);

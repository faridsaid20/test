export const areRectsTouching = (rect1: DOMRect, rect2: DOMRect): boolean => {
  const left1 = rect1.left;
  const right1 = rect1.left + rect1.width;
  const top1 = rect1.top;
  const bottom1 = rect1.top + rect1.height;

  const left2 = rect2.left;
  const right2 = rect2.left + rect2.width;
  const top2 = rect2.top;
  const bottom2 = rect2.top + rect2.height;

  const overlapLeft = Math.max(left1, left2);
  const overlapRight = Math.min(right1, right2);
  const overlapTop = Math.max(top1, top2);
  const overlapBottom = Math.min(bottom1, bottom2);

  if (overlapLeft < overlapRight && overlapTop < overlapBottom) {
    const area = (overlapRight - overlapLeft) * (overlapBottom - overlapTop);
    const area1 = rect1.width * rect1.height;
    const area2 = rect2.width * rect2.height;
    const smallerArea = Math.min(area1, area2);

    return area / smallerArea >= 0.2;
  }

  return false;
};

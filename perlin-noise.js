class Vector2 {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    setPolar(angle, len = 1) {
        this.x = Math.cos(angle) * len;
        this.y = Math.sin(angle) * len;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        return this;
    }
    dot(that) {
        return this.x * that.x + this.y * that.y;
    }
}
export const perlinNoise = () => {
    console.log("perlin noise");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const verticalColCount = 10;
    const horizontalCount = 5;
    if (ctx) {
        for (let i = 0; i < verticalColCount; i++) {
            for (let j = 0; j < horizontalCount; j++) {
                const vect = new Vector2((i * canvas.width) / verticalColCount +
                    (Math.random() * canvas.width * 0.5) / verticalColCount, (j * canvas.height) / horizontalCount +
                    (Math.random() * canvas.width * 0.5) / verticalColCount);
                ctx.beginPath();
                ctx.moveTo((i * canvas.width) / verticalColCount, (j * canvas.height) / horizontalCount);
                ctx.strokeStyle = `rgba(${(i * 255) / verticalColCount}, ${(j * 255) / horizontalCount}, ${((i * 255) / verticalColCount + (j * 255) / horizontalCount) / 2}, 1)`;
                ctx.lineTo(vect.x, vect.y);
                ctx.stroke();
                ctx.fillStyle = `rgba(${(i * 255) / verticalColCount}, ${(j * 255) / horizontalCount}, ${((i * 255) / verticalColCount + (j * 255) / horizontalCount) / 2}, 1)`;
                ctx.strokeRect((i * canvas.width) / verticalColCount, (j * canvas.height) / horizontalCount, canvas.width / verticalColCount, canvas.height / horizontalCount);
            }
        }
    }
};

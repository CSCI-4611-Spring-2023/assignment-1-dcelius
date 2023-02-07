import * as gfx from 'gophergfx'

export class Laser extends gfx.ShapeInstance
{

    constructor(baseShape: gfx.Shape, copyTransform = true)
    {
        super(baseShape, copyTransform);

        this.material = new gfx.Material2();
        this.material.copy(baseShape.material);
    }

    update(deltaTime: number)
    {}

}
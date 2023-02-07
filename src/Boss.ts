/* Assignment 1: Space Minesweeper
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class Boss extends gfx.ShapeInstance
{
    private exploding: boolean;
    private explodeAlpha: number;
    private bossHealth: number;
    private bossCos: number;
    private bossRotating: boolean;

    constructor(baseShape: gfx.Shape, copyTransform = true)
    {
        super(baseShape, copyTransform);

        this.material = new gfx.Material2();
        this.material.copy(baseShape.material);

        this.bossHealth = 25;
        this.bossCos = 0;
        this.bossRotating = false;
        this.exploding = false;
        this.explodeAlpha = 0;
    }

    update(deltaTime: number)
    {
        if (this.bossRotating) this.bossCos += 90 * Math.PI / 180 * deltaTime;
        const explodeTime = 1.0;

        if(this.exploding)
        {
            this.explodeAlpha += deltaTime / explodeTime;
            this.material.color.set(1, (1 - this.explodeAlpha), (1 - this.explodeAlpha), 1);

            if(this.explodeAlpha >= 1.0)
            {
                this.remove();
            }
        }
    }

    damage(): void 
    {
        this.bossHealth -= 1;
        if (this.bossHealth <= 0) {
            this.explode();
        }
    }

    isRotating(): boolean
    {
        return this.bossRotating;
    }

    rotating(): void
    {
        this.bossRotating = true;
    }

    getCos(): number
    {
        return this.bossCos;
    }

    explode(): void
    {
        this.exploding = true;
    }

    isExploding(): boolean
    {
        return this.exploding;
    }
}
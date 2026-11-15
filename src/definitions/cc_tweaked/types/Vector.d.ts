/**
 * A basic 3D vector type and some common vector operations. This may be useful
 * when working with coordinates in Minecraft's world (such as those from the
 * gps API).
 *
 * An introduction to vectors can be found on [Wikipedia](http://en.wikipedia.org/wiki/Euclidean_vector).
 */
export declare type Vector = {
    x: number;
    y: number;
    z: number;

    /**
     * Adds two vectors together.
     *
     * @param o The second vector to add.
     *
     * @returns The resulting vector
     */
    add(o: Vector): Vector;

    /**
     * Subtracts two vectors together.
     *
     * @param o The second vector to subtract.
     *
     * @returns The resulting vector
     */
    sub(o: Vector): Vector;

    /**
     * Multiplies a vector by a scalar value.
     *
     * @param o The scalar value to multiply with.
     *
     * @returns A vector with value `(x * m, y * m, z * m)`.
     */
    mul(factor: number): Vector;

    /**
     * Divides a vector by a scalar value.
     *
     * @param o The scalar value to divide by.
     *
     * @returns A vector with value `(x / m, y / m, z / m)`.
     */
    div(factor: number): Vector;

    /**
     * Negate a vector
     *
     * @returns The negated vector.
     */
    unm(): Vector;

    /**
     * Compute the dot product of two vectors
     *
     * @param o The second vector to compute the dot product of.
     *
     * @returns The dot product of `self` and `o`.
     */
    dot(o: Vector): Vector;

    /**
     * Compute the cross product of two vectors
     *
     * @param o The second vector to compute the cross product of.
     *
     * @returns The cross product of `self` and `o`.
     */
    cross(o: Vector): Vector;

    /**
     * Get the length (also referred to as magnitude) of this vector.
     *
     * @returns The length of this vector.
     */
    length(): number;

    /**
     * Divide this vector by its length, producing with the same direction, but
     * of length 1.
     *
     * @returns The normalised vector
     */
    normalize(): Vector;

    /**
     * Construct a vector with each dimension rounded to the nearest value.
     *
     * @returns The rounded vector.
     */
    round(): Vector;

    /**
     * Construct a vector with each dimension rounded to the nearest value.
     *
     * @param tolerance The tolerance that we should round to, defaulting to 1.
     * For instance, a tolerance of 0.5 will round to the nearest 0.5.
     *
     * @returns The rounded vector.
     */
    round(tolerance: number): Vector;

    /**
     * Convert this vector into a string, for pretty printing.
     *
     * @returns This vector's string representation.
     */
    tostring(): string;

    /**
     * Check for equality between two vectors.
     *
     * @param other The second vector to compare to.
     *
     * @returns Whether or not the vectors are equal.
     */
    equals(other: Vector): boolean;
};

/**
 * @noSelf
 */
declare function _new(x: number, y: number, z: number): Vector;

export { _new as new };

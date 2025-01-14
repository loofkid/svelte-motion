/** 
based on framer-motion@4.1.17,
Copyright (c) 2018 Framer B.V.
*/
import { MotionValue } from "../";
/**
 * @public
 */
export interface ScrollMotionValues {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
    ref: HTMLElement;
}
export interface ScrollOffsets {
    xOffset: number;
    yOffset: number;
    xMaxOffset: number;
    yMaxOffset: number;
}
export declare type GetScrollOffsets = () => ScrollOffsets;
export declare function createScrollMotionValues(): ScrollMotionValues;
export declare function createScrollUpdater(values: ScrollMotionValues, getOffsets: GetScrollOffsets): () => void;

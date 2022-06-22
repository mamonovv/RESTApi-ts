import {number, object, string, TypeOf} from "zod";

export const payload = object({
    body: object({
        title: string({
            required_error: 'Title is required'
        }),
        description: string({
            required_error: 'Description is required'
        }),
        price: number({
            required_error: 'Price is required',
        }).min(120, "Description should be at least 120 characters long!"),
        image: string({
            required_error: 'Image is required'
        }),
    })
})

export const params = object({
    params: object({
        productId: string({
            required_error: 'Product Id is required'
        }),
    })
})

// @ts-ignore
export const createProductSchema = object({
    ...payload,
});

// @ts-ignore
export const updateProductSchema = object({
    ...payload,
    ...params,
});

// @ts-ignore
export const deleteProductSchema = object({
    ...params,
});

// @ts-ignore
export const getProductSchema = object({
    ...params,
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadProductInput = TypeOf<typeof getProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;

import { Request, Response, Router } from "express";
import {Cat, CatType} from './cats.model';


export const readAllCat = (req: Request, res:Response) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "",
    });
  }
};

export const readCat = (req: Request, res:Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "",
    });
  }
};

//*CREATE 새로운 고양이 추가 api
export const createCat = (req: Request, res:Response) => {
  try {
    const data = req.body;
    Cat.push(data);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "",
    });
  }
};

export const updateCat = (req: Request, res:Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "",
    });
  }
};

export const updatePartialCat = (req: Request, res:Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = {...cat, ...body};
        result = cat;
      }
    });
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "",
    });
  }
};

export const deleteCat = (req: Request, res:Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: newCat;
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "",
    });
  }
};

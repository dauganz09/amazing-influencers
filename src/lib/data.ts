import { GiveawaySchema } from "@/app/api/giveaways/get/route";
import { ProductSchema } from "@/app/api/products/get/route";
import { ReviewsSchema } from "@/app/api/reviews/create/route";
import { SurveySchema } from "@/app/api/surveys/get/route";
import { UserSchema } from "@/app/api/users/create/route";
import { nanoid } from "nanoid";

export async function createOrder(
  userId: string, 
  orderNum: string,
  date: Date,
  email: string,
  fullName: string,
  phone: string,
  marketplace: string,
  campaign: string,
  created: Date,
  productId: string,
  surveyId: string,
) {
  // prepare request
  const apiUrl = "/api/orders/create";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderNum,
      date,
      email,
      fullName,
      phone,
      marketplace,
      campaign,
      created,
      productId,
      surveyId,
      userId
    }),
  };
  
  // Get order from database
  const res = await fetch(apiUrl, requestData);
  return res.ok;
}

export async function createProduct(userId: string, name: string, type: string): Promise<Boolean> {
  const productId = nanoid(4);

  // prepare request
  const apiUrl = "/api/products/create";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId, name, type, productId
    }),
  };
  
  // Get order from database
  const res = await fetch(apiUrl, requestData);
  return res.ok;
}

export async function createGiveaway(userId: string, name: string, type: string, status: boolean): Promise<Boolean> {
  // prepare request
  const apiUrl = "/api/giveaways/create";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId, name, type, status
    }),
  };
  
  // Get order from database
  const res = await fetch(apiUrl, requestData);
  return res.ok;
}

export async function createSurvey(name: string, userId: string, productId: string, giveawayIds: string[]): Promise<boolean> {
  // prepare request
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name, userId, productId, giveawayIds
    }),
  };
  
  // Get order from database
  const res = await fetch("/api/surveys/create", requestData);
  return res.ok;
}

export async function getUser(userEmail: string): Promise<UserSchema | null> {
  const apiUrl = "/api/users/get";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail
    }),
  };

  const response = await fetch(apiUrl, requestData);
  const user: UserSchema | null = await response.json();

  return user;
}

export async function getSurvey(surveyCode: string): Promise<SurveySchema | null> {
  const apiUrl = "/api/surveys/get";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surveyCode
    }),
  };
  
  const response = await fetch(apiUrl, requestData);
  const survey: SurveySchema | null = await response.json();
  
  return survey
}

export async function getAllOrders(userEmail: string): Promise<UserSchema | null> {
  const apiUrl = "/api/orders/get/all";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail
    }),
  };

  const response = await fetch(apiUrl, requestData);
  const user: UserSchema | null = await response.json();

  return user;
}

export async function getAllProducts([userEmail, key]: string[]): Promise<ProductSchema[]> {
  // prepare request
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail
    }),
  };
  
  // Get order from database
  const res = await fetch("/api/products/get/all", requestData);
  const json = await res.json();
  return json;

}

export async function getAllGiveaways([userEmail, key]: string[]): Promise<GiveawaySchema[]> {
  // prepare request
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail
    }),
  };
  
  // Get order from database
  const res = await fetch("/api/giveaways/get/all", requestData);
  const json = await res.json();
  return json;
}

export async function getAllReviews(userEmail: string): Promise<ReviewsSchema[] | undefined> {
  // prepare request
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail
    }),
  };
  
  // Get order from database
  const res = await fetch("/api/reviews/get/all", requestData);
  const json = await res.json();
  return json;
}

export async function deleteProduct(id: string): Promise<Boolean> {
  // prepare request
  const apiUrl = "/api/products/delete";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  };
  
  // Get order from database
  const res = await fetch(apiUrl, requestData);
  return res.ok;
}

export async function deleteGiveaway(id: string): Promise<Boolean> {
  // prepare request
  const apiUrl = "/api/giveaways/delete";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  };
  
  // Get order from database
  const res = await fetch(apiUrl, requestData);
  return res.ok;
}

export async function deleteSurvey(id: string): Promise<Boolean> {
  // prepare request
  const apiUrl = "/api/surveys/delete";
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  };
  
  // Get order from database
  const res = await fetch(apiUrl, requestData);
  return res.ok;
}


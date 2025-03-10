"use server";
import { API_URL, onThisDay } from "@/lib/constants";

// ## POST REQUESTS ## //
// SEND PRAYER REQUEST
type PrayerRequest = {
  name: string;
  email: string;
  subject: string;
  mobile: string;
  content: string;
};
export const sendPrayerRequest = async (data: PrayerRequest) => {
  try {
    const res = await fetch(
      `${API_URL}/create-prayer-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to send prayer request. Please try again.");
    }
    const prayerRequestData = await res.json();
    return prayerRequestData.message;
  } catch (error) {
    console.error("Error sending prayer request:", error);
    throw new Error("Failed to send prayer request. Please try again.");
  }
};

//SEND RIDE REQUEST
type RideRequest = {
  name: string;
  address: string;
  mobile_number: string;
  date: Date;
  passengers: string;
};

export const sendRideRequest = async (data: RideRequest) => {
  try {
    const res = await fetch(`${API_URL}/ride-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to send ride request. Please try again.");
    }
    await res.json();
    return "Request sent successfully";
  } catch (error) {
    console.log("Error sending ride request:", error);
    throw new Error("Failed to send ride request. Please try again.");
  }
};

// SEND QUESTION
type Question = {
  name: string;
  email: string;
  mobile_number: string;
  question: string;
};

export const sendQuestion = async (data: Question) => {
  try {
    const res = await fetch(`${API_URL}/question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to send question. Please try again.");
    }
    await res.json();

    return "Question sent successfully";
  } catch (error) {
    console.error("Error sending question:", error);
    throw new Error("Failed to send question. Please try again.");
  }
};

// SUBSCRIBE NEWSLETTER
type Newsletter = {
  name: string;
  email: string;
  mobile: string;
};

export const subscribeNewsletter = async (data: Newsletter) => {
  try {
    const res = await fetch(`${API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Subscription Failed. Please try again.");
    }
    await res.json();

    return "Subscribed successfully";
  } catch (error) {
    console.error("Error subscribing:", error);
    throw new Error("Subscription Failed. Please try again.");
  }
};
// SUBSCRIBE SERMON

export const subscribeSermon = async (formData: FormData) => {
  const email = formData.get("email") as string;
  if (!email) return;
  try {
    // const res = await fetch(
    //   `${API_URL}/sermon-subscription`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   }
    // );

    // if (!res.ok) {
    //   throw new Error("Subscription Failed. Please try again.");
    // }
    // await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
    return "Subscribed successfully";
    return "Subscribed successfully";
  } catch (error) {
    console.error("subscription failed:", error);
    throw new Error("Subscription Failed. Please try again.");
  }
};

// SEND CONNECT REQUEST
type Connect = {
  name: string;
  mobile: string;
  email: string;
  gender: "MALE" | "FEMALE";
  marital_status: "MARRIED" | "SINGLE" | "DIVORCED" | "WIDOWED";
  attended_service_as: "In-Person" | "Online";
  birthdate: string;
  first_impression: string;
  contact_about: string;
  sign_me_up_for: string;
  prayer_request: string;
};

export const connectWithUs = async (data: Connect) => {
  try {
    const res = await fetch(`${API_URL}/new-connect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Request Failed. Please try again.");
    }
    await res.json();

    return "Request sent successfully";
  } catch (error) {
    console.error("Error sending request:", error);
    throw new Error("Request Failed. Please try again.");
  }
};

type JoinUs = {
  name: string;
  email: string;
  mobile: string;
  ministry: string;
};
// JOIN US
export const joinUs = async (data: JoinUs) => {
  // join-group
  try {
    const res = await fetch(`${API_URL}/join-group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Request Failed. Please try again.");
    }
    await res.json();

    return "Request sent successfully";
  } catch (error) {
    console.error("Error sending request:", error);
    throw new Error("Request Failed. Please try again.");
  }
};

export const getInstagramPostUrl = async () => {
  try {
    // Get user ID
    const userRes = await fetch(
      `https://graph.instagram.com/me?fields=user_id&access_token=${process.env.INSTAGRAM_KEY}`
    );
    const userData = await userRes.json();
    // Get Post urls
    if (userData) {
      const postResponse = await fetch(
        `https://graph.instagram.com/v21.0/${userData.user_id}/media?fields=permalink&access_token=${process.env.INSTAGRAM_KEY}`
      );

      const postUrl = await postResponse.json();
      return postUrl.data as {
        permalink: string;
        id: string;
      }[];
    }
  } catch (error) {
    console.error("Error sending request:", error);
    throw new Error("Request Failed. Please try again.");
  }
};

// INSTAGRAM FEED
// export const getInstagramFeed = async () => {
//   const res = await fetch(
//     `https://graph.instagram.com/me/media?fields=id,caption,permalink&access_token=${process.env.INSTAGRAM_KEY}`
//   );
//   const data = await res.json();
//   // console.log(data);
// };

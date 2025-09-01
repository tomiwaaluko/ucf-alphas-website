// Test file to check API endpoint configuration
console.log("API Test Configuration:");
console.log("Testing /api/contact endpoint...");

// Test function for the new API endpoint
window.testContactAPI = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message from the contact API",
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    console.log("API Test result:", {
      status: response.status,
      success: result.success,
      message: result.message || result.error,
      data: result.data,
    });

    return result;
  } catch (error) {
    console.error("API Test error:", error);
    return { success: false, error: "Failed to test API" };
  }
};

console.log(
  "Contact API test function loaded. Call window.testContactAPI() in console to test."
);

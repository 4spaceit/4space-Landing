export function parseUTMParameters() {
    if (typeof window === 'undefined') {
      // Return default values or an empty object during SSR
      return {
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: '',
      };
    }
  
    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);
  
    return {
      utm_source: queryParams.get("utm_source") || "",
      utm_medium: queryParams.get("utm_medium") || "",
      utm_campaign: queryParams.get("utm_campaign") || "",
      utm_term: queryParams.get("utm_term") || "",
      utm_content: queryParams.get("utm_content") || "",
    };
  }
  
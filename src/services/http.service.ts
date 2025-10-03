import apiClient from "./api-client";
/**
 * Generic HTTP Service for making API calls using Axios.
 */
class HttpService {
  /**
   * Fetches a single entity by ID.
   *
   * @template TResponse - The expected response type.
   * @param endPoint - The API endpoint.
   * @param id - The entity ID (string or number).
   * @returns An object containing the Axios request promise and a cancel method.
   */
  getById<TResponse>(endPoint: string, id: any | number) {
    const controller = new AbortController();
    const request = apiClient.get<TResponse>(`${endPoint}/${id}`, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  /**
   * Fetches data from an endpoint. This may return single or multiple object. If an api has multiple parameter then call it
   *
   * @template TResponse - The expected response type.
   * @param endPoint - The API endpoint.
   * @returns An object containing the Axios request promise and a cancel method.
   */
  get<TResponse>(endPoint: string) {
    const controller = new AbortController();
    const request = apiClient.get<TResponse>(endPoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  /**
   * Fetches all entities from an endpoint.
   *
   * @template TResponse - The expected response type (array).
   * @param endPoint - The API endpoint.
   * @returns An object containing the Axios request promise and a cancel method.
   */
  getAll<TResponse>(endPoint: string) {
    const controller = new AbortController();
    const request = apiClient.get<TResponse[]>(endPoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  /**
   * Sends a POST request to create a new entity.
   *
   * @template TRequest - The request body type.
   * @template TResponse - The expected response type.
   * @param endPoint - The API endpoint.
   * @param entity - The data to send in the request body.
   * @returns A promise resolving to the response.
   */
  post<TRequest, TResponse>(endPoint: string, entity: TRequest) {
    return apiClient.post<TResponse>(endPoint, entity);
  }

  /**
   * Sends a PUT request to update an entity.
   *
   * @template TRequest - The request body type.
   * @template TResponse - The expected response type.
   * @param endPoint - The API endpoint.
   * @param entity - The data to update.
   * @returns A promise resolving to the response.
   */
  put<TRequest, TResponse>(endPoint: string, entity: TRequest) {
    return apiClient.put<TResponse>(endPoint, entity);
  }

  /**
   * Sends a PATCH request to partially update an entity.
   *
   * @template TRequest - The request body type.
   * @template TResponse - The expected response type.
   * @param endPoint - The API endpoint.
   * @param entity - The partial data to update.
   * @returns A promise resolving to the response.
   */
  patch<TRequest, TResponse>(endPoint: string, entity: TRequest) {
    return apiClient.patch<TResponse>(endPoint, entity);
  }

  /**
   * Deletes an entity by ID.
   *
   * @template TResponse - The expected response type.
   * @param endPoint - The API endpoint.
   * @param id - The entity ID (string or number).
   * @returns A promise resolving to the response.
   */
  delete<TResponse>(endPoint: string, id: any | number) {
    return apiClient.delete<TResponse>(`${endPoint}/${id}`);
  }
}
export default new HttpService();

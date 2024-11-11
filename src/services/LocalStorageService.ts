
class LocalStorageService {
    static load<T>(key: string, defaultValue: T): T {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
      } catch (error) {
        console.error(`Error loading data from localStorage with key "${key}":`, error);
        return defaultValue;
      }
    }

    static save(key: string, value: any): void {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error saving data to localStorage with key "${key}":`, error);
      }
    }

    static remove(key: string): void {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing data from localStorage with key "${key}":`, error);
      }
    }

    static clear(): void {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error clearing localStorage:", error);
      }
    }
  }

  export default LocalStorageService;

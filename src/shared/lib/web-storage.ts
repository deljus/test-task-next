interface iStorageService<T> {
  get(): T | null;
  set(value: T): void;
  clear(): void;
  hasToken(): boolean;
}

export class WebStorage<T extends object> implements iStorageService<T> {
  private readonly storage: Storage;
  private readonly tokenKey: string;

  constructor(key: string, storage: Storage) {
    this.storage = storage;
    this.tokenKey = key;
  }

  get() {
    const value = this.storage.getItem(this.tokenKey);

    if (value!) {
      return JSON.parse(value);
    }

    return null;
  }

  set(value: T) {
    return this.storage.setItem(this.tokenKey, JSON.stringify(value));
  }

  clear() {
    return this.storage.removeItem(this.tokenKey);
  }

  hasToken() {
    return this.get() !== null;
  }
}

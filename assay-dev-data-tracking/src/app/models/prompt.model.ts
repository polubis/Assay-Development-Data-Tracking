
export class Prompt {
  constructor(
    public domain: string,
    public content: string,
    public type: string,
    public code?: number,
    public effect?: any,
    public requestParams?: any
  ) {}
}
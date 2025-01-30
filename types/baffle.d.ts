declare module "baffle" {
    export default function baffle(
      elements: string | Element | NodeListOf<Element>
    ): {
      start: () => any;
      set: (options: { characters?: string; speed?: number }) => any;
      reveal: (duration?: number, delay?: number) => any;
    };
  }
  
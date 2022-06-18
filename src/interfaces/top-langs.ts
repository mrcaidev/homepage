export interface TopLang {
  name: string;
  color: string;
  percentage: number;
}

export interface TopLangsResponse {
  data: {
    user: {
      repositories: {
        nodes: {
          languages: {
            edges: {
              size: number;
              node: {
                color: string;
                name: string;
              };
            }[];
          };
        }[];
      };
    };
  };
}

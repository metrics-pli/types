export default interface ResultsetAdvancedInterface {
  generatedTime: string;
  initialUrl: string;
  url: string;
  audits: Array<{
    id: string;
    score: number | boolean;
    displayValue: string;
    rawValue: number | boolean;
    description: string;
  }>;
  fullResult: object;
}

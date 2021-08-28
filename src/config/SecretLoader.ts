// dependencies
import * as fs from 'fs';

export const SecretLoader = {
  read(secretName: string): string | undefined {
    try {
      return fs.readFileSync(`/run/secrets/${secretName}`, 'utf8');
    } catch (err) {
      return undefined;
    }
  },
};

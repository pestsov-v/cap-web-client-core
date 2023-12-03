import {inversify} from '@Packages'
const {injectable} = inversify
import { IDiscoveryService } from '@Core/Types';

@injectable()
export class DiscoveryService implements IDiscoveryService{
  public getMandatory() {
    return
  }
}
import { inversify } from '@Packages';
import { CoreSymbols } from '@CoreSymbols';
import { DiscoveryService } from '@Core/services/discovery.service';
import { IDiscoveryService } from '@Core/Types';

export const module = new inversify.ContainerModule((bind) => {
  bind<IDiscoveryService>(CoreSymbols.DiscoveryService).to(DiscoveryService).inSingletonScope()
})
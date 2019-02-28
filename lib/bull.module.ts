import { DynamicModule, Module, Provider, Global } from "@nestjs/common";
import { BullModuleOptions, BullModuleAsyncOptions } from "./bull.interfaces";
import {
  createQueuesProviders,
  createAsyncQueuesProviders
} from "./bull.providers";

@Global()
@Module({})
export class BullModule {
  static forRoot(options: BullModuleOptions): DynamicModule {
    const providers: any[] = createQueuesProviders(options);
    return {
      module: BullModule,
      components: providers,
      exports: providers
    };
  }

  static forRootAsync(options: BullModuleAsyncOptions): DynamicModule {
    const providers: Provider[] = createAsyncQueuesProviders(options);
    return {
      imports: options.imports,
      module: BullModule,
      components: providers,
      exports: providers
    };
  }
}

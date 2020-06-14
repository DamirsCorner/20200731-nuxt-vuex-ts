import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import SampleModule from './sample'

export function getSampleModule(store: Store<any>): SampleModule {
  return getModule(SampleModule, store)
}

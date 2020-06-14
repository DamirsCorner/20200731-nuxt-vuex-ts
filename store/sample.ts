import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class SampleModule extends VuexModule {
  count = 0

  get isDefault(): boolean {
    return this.count === 0
  }

  @Mutation
  increment(): void {
    this.count++
  }

  @Action({ rawError: true })
  incrementAsync(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.increment()
        resolve()
      }, 100)
    })
  }
}

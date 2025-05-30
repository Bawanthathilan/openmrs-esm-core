[@openmrs/esm-framework](../API.md) / OpenmrsAppRoutes

# Interface: OpenmrsAppRoutes

This interface describes the format of the routes provided by an app

## Table of contents

### Properties

- [backendDependencies](OpenmrsAppRoutes.md#backenddependencies)
- [extensions](OpenmrsAppRoutes.md#extensions)
- [featureFlags](OpenmrsAppRoutes.md#featureflags)
- [modals](OpenmrsAppRoutes.md#modals)
- [optionalBackendDependencies](OpenmrsAppRoutes.md#optionalbackenddependencies)
- [pages](OpenmrsAppRoutes.md#pages)
- [version](OpenmrsAppRoutes.md#version)
- [workspaceGroups](OpenmrsAppRoutes.md#workspacegroups)
- [workspaces](OpenmrsAppRoutes.md#workspaces)

## Properties

### backendDependencies

• `Optional` **backendDependencies**: `Record`<`string`, `string`\>

A list of backend modules necessary for this frontend module and the corresponding required versions.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:360

___

### extensions

• `Optional` **extensions**: [`ExtensionDefinition`](../API.md#extensiondefinition)[]

An array of all extensions supported by this frontend module. Extensions can be mounted in extension slots, either via declarations in this file or configuration.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:374

___

### featureFlags

• `Optional` **featureFlags**: [`FeatureFlagDefinition`](FeatureFlagDefinition.md)[]

An array of all feature flags for any beta-stage features this module provides.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:376

___

### modals

• `Optional` **modals**: [`ModalDefinition`](../API.md#modaldefinition)[]

An array of all modals supported by this frontend module. Modals can be launched by name.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:378

___

### optionalBackendDependencies

• `Optional` **optionalBackendDependencies**: `Object`

A list of backend modules that may enable optional functionality in this frontend module if available and the corresponding required versions.

#### Index signature

▪ [key: `string`]: `string` \| { `feature?`: [`FeatureFlagDefinition`](FeatureFlagDefinition.md) ; `version`: `string`  }

The name of the backend dependency and either the required version or an object describing the required version

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:362

___

### pages

• `Optional` **pages**: [`PageDefinition`](../API.md#pagedefinition)[]

An array of all pages supported by this frontend module. Pages are automatically mounted based on a route.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:372

___

### version

• `Optional` **version**: `string`

The version of this frontend module.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:358

___

### workspaceGroups

• `Optional` **workspaceGroups**: [`WorkspaceGroupDefinition`](WorkspaceGroupDefinition.md)[]

An array of all workspace groups supported by this frontend module.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:382

___

### workspaces

• `Optional` **workspaces**: [`WorkspaceDefinition`](../API.md#workspacedefinition)[]

An array of all workspaces supported by this frontend module. Workspaces can be launched by name.

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:380

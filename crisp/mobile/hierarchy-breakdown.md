# Hierarchy Breakdown

## `ProjectHierarchy`

- **Fetch Initial Data:**
  - Dispatches `fetchPersistedHierarchies` and `fetchAllHierarchyItems` actions on component mount or when `hierarchyId` is not set.
  - Retrieves and sets the first hierarchy ID from fetched hierarchies.

- **Track Project Exclusions:**
  - Uses a `useRef` to initialize and track `project.exclusions`.
  - Maintains a state `projectExclusions` to manage exclusions dynamically.

- **Auto-Save Exclusions:**
  - Implements the `useAutoSave` hook to persist `projectExclusions` when changes are detected.
  - Dispatches the `persistProjectExclusions` action to save the exclusions to the backend or store.

- **Filter Selected Items:**
  - Computes `selectedIds` by excluding items already present in `projectExclusions`.
  - Updates `selectedIds` whenever `projectExclusions` or `hierarchyItems` changes.

- **Handle Selection Changes:**
  - Provides an `onCheck` function to toggle item selection.
  - Updates `projectExclusions` and marks the state as `changed` whenever an item is selected or deselected.

- **Render Conditional UI:**
  - Renders the `HierarchyView` component with the following props:
    - `hierarchyId`: The ID of the current hierarchy.
    - `selection`: The list of selected hierarchy item IDs.
    - `onCheck`: The function to handle selection changes.
  - Returns `null` if `hierarchyId` is not yet set, acting as a loading state placeholder.

- **Logging for Debugging:**
  - Logs `project.exclusions`, `allHierarchies`, and `hierarchyItems` to the console for debugging purposes.

## `HierarchyView`

- **Fetch Hierarchy Items:**
  - Dispatches `fetchHierarchyItemsById` action when the `hierarchyId` prop changes.
  - Ensures the hierarchy items are always up-to-date based on the selected hierarchy.

- **Map Items to Hierarchy:**
  - Uses `items` prop to create a mapping of hierarchy items by their parent ID.
  - Stores the mapped items in the `itemsMap` state.

- **Filter and Process Hierarchy Items:**
  - Filters hierarchy items based on the `scope` prop if provided.
  - Ensures that parent hierarchy items are included when filtering child items.
  - Updates `hierarchyItems` and `rootHierarchyItems` states with filtered results.

- **Generate Memoized Hierarchy Nodes:**
  - Creates a hierarchy tree structure using `HierarchyNode.Create`.
  - Memoizes the result to avoid unnecessary recalculations.

- **Handle Query-Based Node Filtering:**
  - Filters hierarchy nodes based on the `query` state.
  - Updates the visibility of nodes and their children based on the search query.

- **Render Search and Filtering UI:**
  - Includes a `SearchBar` for text-based filtering.
  - Includes a `Switch` to toggle the scoped filtering of hierarchy items.

- **Render Hierarchy Nodes:**
  - Uses a `FlatList` to render a list of nodes using `HierarchyNodeView`.
  - Passes `onCheck`, `onSelectHierarchy`, and `onSelectItem` callbacks to handle interactions.

- **Key Features of Node Management:**
  - Supports expanding and collapsing of hierarchy nodes.
  - Allows selecting and deselecting nodes, including recursive updates for child nodes.

- **Styling:**
  - Provides customized styles for the hierarchy container, list, search bar, and individual nodes.

## `HierarchyNodeView`

- **Local State Management:**
  - Manages local state for visibility (`visible`), loading (`loading`), selection (`checked`), and expansion (`expanded`) of the node.
  - Initializes state from the `node` and `propLoading` props.

- **State Synchronization:**
  - Synchronizes local state with incoming props to avoid unnecessary updates:
    - Updates visibility, expansion, selection, and loading state based on changes in props.

- **Node Code Handling:**
  - Calculates a code string for the node based on its `level` and `code` property.
  - Adjusts the width of the code display dynamically.

- **Toggle Expansion:**
  - Toggles the `expanded` state of the node.
  - Updates the `expanded` property of the `node` object to keep it in sync.

- **Handle Node Selection (`handleCheck`):**
  - Recursively selects or deselects the current node and its child nodes.
  - Propagates selection changes up to parent nodes (`parentRef`).

- **Render Node Components:**
  - Displays a checkbox for selecting the node if `onCheck` is provided.
  - Shows a loading indicator if the node is in a loading state.
  - Displays the node's name and its expand/collapse icon based on its state.

- **Child Node Rendering:**
  - Recursively renders child nodes using the `HierarchyNodeView` component.
  - Ensures visibility and expansion rules are respected.

- **Item Rendering:**
  - Displays additional items associated with the node that are marked as visible.
  - Supports selecting an item through the `onSelectItem` callback.

- **Interaction Handling:**
  - Handles click events for expanding/collapsing the node and selecting items.
  - Allows adding child nodes via the `onSelectHierarchy` callback.

- **Styling:**
  - Customizes styles for the node container, action buttons, and child node containers.
  - Provides a visually consistent layout for expand/collapse icons, checkboxes, and loading indicators.

- **Hierarchical Recursion:**
  - Recursively processes child nodes and their items, maintaining the hierarchy structure visually and functionally.

## `HierarchyNode`

- **Node Initialization:**
  - Constructs a hierarchical node structure with essential properties:
    - `id`, `name`, and `code` extracted from the provided `item`.
    - `level` tracks the depth of the node in the hierarchy.
    - `items` contains child items associated with the node.
    - `children` references the child nodes (populated later).

- **Local State Management:**
  - Manages the following state properties for each node:
    - `visible`: Determines if the node is visible.
    - `selected`: Tracks whether the node is selected.
    - `expanded`: Indicates if the node is expanded to show its children.

- **Parent and Child Relationships:**
  - Maintains a reference to the parent node (`parent`).
  - Stores the child nodes (`children`) that are part of the hierarchy.

- **Dynamic State Functions:**
  - Provides functions to modify visibility (`setVisible`), selection (`setSelected`), and expansion (`setExpanded`) states.

- **Node Creation (`createHierarchyNode`):**
  - Recursively creates hierarchical nodes based on parent-child relationships:
    - Filters items based on `parentId` to identify child nodes.
    - Sorts child nodes based on their `code`.
    - Recursively calls `createHierarchyNode` for deeper levels if `recurse` is enabled.

- **Selection Handling:**
  - Marks nodes as selected if their `id` exists in the `selection` array.

- **Hierarchical Construction:**
  - Ensures that each node correctly references its parent and children, preserving the tree structure.

- **Memoization:**
  - Uses `useMemo` to optimize the calculation of child nodes, avoiding unnecessary recomputation when dependencies haven't changed.

- **Supports Custom Logic:**
  - Designed to be flexible and reusable for hierarchical data processing.

## `HierarchyItemView`

- **Item Display:**
  - Renders a visual representation of a `HierarchyItem` object.
  - Displays the `code` and `name` properties of the provided `item`.

- **Conditional Rendering:**
  - Returns an empty component if no `item` is provided.

- **Column-Based Layout:**
  - Divides the display into two sections:
    - **Left Column:**
      - Shows the `code` of the hierarchy item.
      - Styled with bold, centered text and a background color.
    - **Right Column:**
      - Displays the `name` of the hierarchy item.
      - Styled with bold text and additional padding.

- **Styling:**
  - Applies consistent styles to maintain a row-based layout:
    - Ensures alignment of content with `flexDirection: 'row'` and `alignItems: 'center'`.
    - Uses specific colors and spacing for a visually appealing design.

- **Reusability:**
  - Designed as a reusable component for rendering individual hierarchy items.

- **Minimal Dependencies:**
  - Uses only `react-native` and `@rneui/themed` for rendering and styling.

## `ItemNode`

- **Class Representation:**
  - Provides a wrapper class for an individual item (e.g., `InspectionPoint`).

- **Initialization:**
  - Takes an `item` as a parameter during instantiation and assigns it to the `item` property.
  - Initializes the `visible` property to `true` by default.

- **Property Accessors:**
  - **`id`:**
    - Returns the `id` of the wrapped item.
  - **`text`:**
    - Returns the `text` property of the wrapped item.
  - **`code`:**
    - Returns the `code` property of the wrapped item or `undefined` if `code` is not defined.

- **Encapsulation:**
  - Encapsulates the `item` properties for consistent and simplified access.

- **Visibility Control:**
  - Includes a `visible` property to indicate whether the node should be displayed.

- **Reusability:**
  - Designed to represent any item with `id`, `text`, and `code` properties, making it reusable across different contexts.

## How the Files Work Together: Step-by-Step Explanation

### 1. **`ProjectHierarchy.js`**

- **Purpose:** The entry point for the project hierarchy feature.
- **Process:**
     1. **Fetch Data:**
        - Dispatches `fetchPersistedHierarchies` to get the list of all hierarchies.
        - Dispatches `fetchAllHierarchyItems` to fetch all hierarchy items from the store.
     2. **Initialize Hierarchy ID:**
        - Sets the initial `hierarchyId` based on the first hierarchy fetched.
     3. **Filter Exclusions:**
        - Filters out excluded hierarchy items based on the `project.exclusions`.
     4. **Auto-Save Functionality:**
        - Tracks changes to exclusions and persists them automatically when changes are made.
     5. **Pass Props to `HierarchyView`:**
        - Passes `hierarchyId`, selected IDs (`selectedIds`), and the `onCheck` function to `HierarchyView`.

---

### 2. **`HierarchyView.js`**

- **Purpose:** Displays the hierarchy structure and allows interaction with it.
- **Process:**
     1. **Fetch Hierarchy Items:**
        - Dispatches `fetchHierarchyItemsById` when `hierarchyId` changes.
     2. **Map Items to Nodes:**
        - Converts `items` into an `itemsMap` for easy association of hierarchy items with their respective nodes.
     3. **Filter Hierarchy Items:**
        - Filters items to show only those matching the current scope or selection criteria.
     4. **Build Hierarchy Nodes:**
        - Uses `HierarchyNode.Create` to construct a tree of nodes from the root hierarchy items.
     5. **Query Filtering:**
        - Filters nodes based on the user's search query.
     6. **Render UI:**
        - Uses a `FlatList` to render the tree structure of nodes via `HierarchyNodeView`.

---

### 3. **`HierarchyNode.js`**

- **Purpose:** Represents an individual hierarchy node and provides utility for building the hierarchy tree.
- **Process:**
     1. **Node Structure:**
        - Defines a node with properties such as `id`, `name`, `code`, `visible`, and `expanded`.
     2. **Create Hierarchy Tree:**
        - Recursively builds the hierarchy tree by associating child nodes with their respective parent nodes.
     3. **Utility for `HierarchyView`:**
        - Provides the `HierarchyNode.Create` method to convert raw hierarchy items into a usable node structure.

---

### 4. **`HierarchyNodeView.js`**

- **Purpose:** Renders a single hierarchy node, including its children and interaction elements.
- **Process:**
     1. **State Synchronization:**
        - Syncs local state (`visible`, `expanded`, etc.) with the node's properties.
     2. **User Interaction:**
        - Toggles node expansion using `toggleExpanded`.
        - Handles checkbox selection with `handleCheck`, which updates the node and its child nodes.
     3. **Recursive Rendering:**
        - Renders child nodes by recursively using `HierarchyNodeView`.
     4. **UI Elements:**
        - Displays the node's code, name, and expansion state, with a checkbox and toggle options for user interaction.

---

### 5. **`HierarchyItemView.js`**

- **Purpose:** Provides a simple view to display a single hierarchy item's details.
- **Process:**
     1. **Input Validation:**
        - Renders nothing if the `item` prop is undefined.
     2. **Display Item Properties:**
        - Displays the `code` in a left column and the `name` in a right column.
     3. **Integration:**
        - Can be used as a reusable component to display individual hierarchy items.

---

### 6. **`ItemNode.js`**

- **Purpose:** Provides a wrapper for individual items, such as `InspectionPoint`.
- **Process:**
     1. **Encapsulation:**
        - Encapsulates an item's properties (`id`, `text`, and `code`) for consistent access.
     2. **Integration:**
        - Used in `HierarchyView` to represent items within the hierarchy and manage their visibility.

---

## Overall Workflow

1. **ProjectHierarchy.js:**
   - Fetches hierarchy and hierarchy item data and initializes the `hierarchyId`.
   - Passes the necessary props to `HierarchyView`.

2. **HierarchyView.js:**
   - Fetches hierarchy items based on the `hierarchyId`.
   - Processes the items into a tree structure using `HierarchyNode.Create`.
   - Filters and renders the nodes via `HierarchyNodeView`.

3. **HierarchyNode.js:**
   - Constructs individual nodes and recursively builds the hierarchy tree.

4. **HierarchyNodeView.js:**
   - Renders the hierarchy nodes, allowing user interaction (e.g., expand/collapse, select/deselect).
   - Handles recursive rendering of child nodes.

5. **HierarchyItemView.js:**
   - Displays the details of individual hierarchy items when needed.

6. **ItemNode.js:**
   - Encapsulates and manages individual hierarchy items for easier integration into the hierarchy tree.

## Streamlining Files in Your Project

### **Files That Could Be Potentially Unnecessary or Simplified**

1. **`HierarchyItemView.js`**
 - **Reason for Removal:**
    - This component is quite simple and only renders a single item's `code` and `name`. Its functionality can be folded into `HierarchyNodeView` or directly handled in `HierarchyView` if it’s not reused elsewhere.
 - **When to Keep:**
    - Retain this file if you anticipate reusing it in multiple places with varying styles or functionality.

2. **`ItemNode.js`**
 - **Reason for Removal:**
    - Redux already manages your state, so the encapsulation provided by `ItemNode` may not be necessary.
    - The hierarchy item structure can be directly mapped and manipulated without wrapping it in a separate class.
 - **When to Keep:**
    - If the `ItemNode` logic (e.g., visibility management) is crucial for processing items in specific ways outside of Redux's scope, keep it.

---

### **Files That Are Necessary**

1. **`ProjectHierarchy.js`**
 - **Why It's Necessary:**
    - It acts as the entry point for the hierarchy feature and manages high-level state like `projectExclusions`.
    - Redux state is combined with local state and functionality for persistence, which is still relevant.

2. **`HierarchyView.js`**
 - **Why It's Necessary:**
    - This is the core of rendering the hierarchy tree and managing the Redux state for hierarchy items.
    - It handles the flow of data from `ProjectHierarchy` and passes it down to `HierarchyNodeView`.

3. **`HierarchyNode.js`**
 - **Why It's Necessary:**
    - The `HierarchyNode.Create` method provides a recursive and structured way to construct the tree hierarchy.
    - While it can be replaced by a utility function, its encapsulation provides clarity and reusability.

4. **`HierarchyNodeView.js`**
 - **Why It's Necessary:**
    - This component handles the rendering and interaction of individual nodes.
    - It encapsulates complex logic like recursive rendering and node state synchronization.

---

### **Suggestions for Simplification**

 **Merge `HierarchyItemView` into `HierarchyNodeView`:**

- If `HierarchyItemView` is only used within nodes, its logic can be integrated directly into `HierarchyNodeView`. This avoids an unnecessary component abstraction.

 **Replace `ItemNode` with Inline Logic:**

- If `ItemNode` is only used for visibility and encapsulating item properties, those can be handled inline in `HierarchyView` or with selectors in Redux.

 **Utility Functions vs. `HierarchyNode` Class:**

- If `HierarchyNode` is primarily used to build the tree, consider converting it to a pure utility function. This aligns better with a functional React/Redux approach.

---

### **Resulting Structure**

1. **Core Files:**

- `ProjectHierarchy.js`
- `HierarchyView.js`
- `HierarchyNode.js` (possibly as a utility function)
- `HierarchyNodeView.js`

2. **Potentially Removed or Merged Files:**

- `HierarchyItemView.js` (merge into `HierarchyNodeView`)
- `ItemNode.js` (replace with inline logic)

---

### **Conclusion**

By reducing unnecessary abstractions, your code will be simpler, easier to maintain, and better aligned with the React/Redux architecture.

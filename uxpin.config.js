module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'packages/gestalt/src/Button/Button.js',
          'packages/gestalt/src/Avatar/Avatar.js',
          'packages/gestalt/src/Spinner/Spinner.js',
          'packages/gestalt/src/Box/Box.js',
          'packages/gestalt/src/Text/Text.js',
          'packages/gestalt/src/Link/Link.js',
          'packages/gestalt/src/CardMerge/CardMerge.js',
          'packages/gestalt/src/Label/Label.js',
          'packages/gestalt/src/Mask/Mask.js',
          'packages/gestalt/src/Column/Column.js',
          'packages/gestalt/src/Container/Container.js',
          'packages/gestalt/src/Divider/Divider.js',
          'packages/gestalt/src/GroupAvatar/GroupAvatar.js',
          'packages/gestalt/src/Heading/Heading.js',
          'packages/gestalt/src/Icon/Icon.js',
          'packages/gestalt/src/IconButton/IconButton.js',
          'packages/gestalt/src/Image/Image.js',
          'packages/gestalt/src/Pog/Pog.js',
          'packages/gestalt/src/Pulsar/Pulsar.js',
          'packages/gestalt/src/Letterbox/Letterbox.js',
          'packages/gestalt/src/RadioButton/RadioButton.js',
          'packages/gestalt/src/SearchField/SearchField.js',
          'packages/gestalt/src/SegmentedControl/SegmentedControl.js',
          'packages/gestalt/src/SelectList/SelectList.js',
          'packages/gestalt/src/Switch/Switch.js',
          'packages/gestalt/src/Tabs/Tabs.js',
          'packages/gestalt/src/TextArea/TextArea.js',
          'packages/gestalt/src/TextField/TextField.js',
          'packages/gestalt/src/Toast/Toast.js',
          'packages/gestalt/src/Touchable/Touchable.js',
          'packages/gestalt/src/Video/Video.js',
          'packages/gestalt/src/FlyoutMerge/FlyoutMerge.js',
          'packages/gestalt/src/TooltipMerge/TooltipMerge.js',
          'packages/gestalt/src/CollageMerge/CollageMerge.js',
          'packages/gestalt/src/SearchFieldMerge/SearchFieldMerge.js',
          'packages/gestalt/src/SegmentedControlMerge/SegmentedControlMerge.js',
          'packages/gestalt/src/TabsMerge/TabsMerge.js',
          'packages/gestalt/src/SwitchMerge/SwitchMerge.js',
          'packages/gestalt/src/ToastMerge/ToastMerge.js',
          'packages/gestalt/src/ToastMergeInteractive/ToastMergeInteractive.js',
          'packages/gestalt/src/CheckboxMerge/CheckboxMerge.js',
        ],
      },
    ],
  },
};

/* Unsuported Components – Likely need special wrappers
** Collage - functions in props don't work yet. Functionality available via CollageMerge.
** Flyout – refs are not supported. Works via wrapper FlyoutMerge
** Tooltip – refs don't work with UXPin Merge. Works via wrapper TootlipMerge
** Layer – UXPin Merge doesn't work with position absolute
** Masonry – unclear how this component works
** Modal – UXPin Merge doesn't work with position absolute
** Sticky – bugs with position
*/

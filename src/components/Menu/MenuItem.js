import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Tooltip from "../Tooltip";
import Icon from "../Icon";

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        id: PropTypes.string.isRequired,
        disabled: PropTypes.bool
    };
    static defaultProps = {
        disabled: false
    };
    handleClick = e => {
        const {
            onItemTrigger,
            id,
            parentIds,
            disabled,
            title,
            onSubItemClick
        } = this.props;
        if (disabled) {
            return;
        }
        if (onSubItemClick) {
            onSubItemClick();
        }
        if (onItemTrigger) {
            onItemTrigger(e, { id, parentIds, title }, "click");
        }
    };
    handleMouseEnter = e => {
        const { onItemMouseEnter, id, parentIds } = this.props;
        if (onItemMouseEnter) {
            onItemMouseEnter(e, id, parentIds);
        }
    };
    handleMouseLeave = e => {
        const { onItemMouseLeave, id, parentIds } = this.props;
        if (onItemMouseLeave) {
            onItemMouseLeave(e, id, parentIds);
        }
    };
    render() {
        const {
            prefixCls,
            disabled,
            title,
            children,
            inlineIndent,
            selectedIds,
            id,
            rootId,
            mode,
            level
        } = this.props;
        let isSelected = selectedIds.indexOf(id) != -1;
        let classString = classnames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-active`]: isSelected,
            [`${prefixCls}-item-disabled`]: disabled
        });

        let tooltipTitle = [],
            item,
            icon;

        React.Children.forEach(children, (child, index) => {
            if (!child) {
                return;
            }
            if (child.type && child.type.displayName == "Icon" && index == 0) {
                icon = child;
            } else {
                tooltipTitle.push(child);
            }
        });

        if (mode == "inlineCollapsed" && level == 1) {
            item = (
                <li className={classString}>
                    <Tooltip
                        placement="right"
                        title={tooltipTitle}
                        onClick={this.handleClick}
                    >
                        <div className={`${prefixCls}-collapsed-item`}>
                            {icon}
                        </div>
                    </Tooltip>
                </li>
            );
        } else {
            item = (
                <li
                    className={classString}
                    style={{
                        paddingLeft: mode == "inline" ? inlineIndent : null
                    }}
                    title={title}
                    onClick={this.handleClick}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    {children}
                </li>
            );
        }

        return item;
    }
}

export default MenuItem;
